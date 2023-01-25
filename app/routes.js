const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// country 'post-code routing.
router.post('/delivery-postcode-answer', function (req, res) {
    var delPostcode = req.session.data['delPostcode']
    if (delPostcode == "ENG 1ND") {
        res.redirect('order-lateral-flow-kits/england/eligibility')
    } else if (delPostcode == "SC07 1ND") {
        res.redirect('order-lateral-flow-kits/scotland/eligibility-scotland')
    } else if (delPostcode == "N0R 1ND") {
        res.redirect('order-lateral-flow-kits/ni/eligibility-ni')
    } else if (delPostcode == "WA1 3LS"){
        res.redirect('order-lateral-flow-kits/wales/eligibility-wales')
    } else if (delPostcode == "ERR 0R1"){
        res.redirect('order-lateral-flow-kits/country-choice')
    } else if (delPostcode == "API ERR"){
        res.redirect('order-lateral-flow-kits/error/tech-error')
    } else if (delPostcode == "NO DEL"){
        res.redirect('order-lateral-flow-kits/error/unable-to-deliver')
    } else if (delPostcode == "ERROR"){
        res.redirect('order-lateral-flow-kits/error/postcode-format-error')
        // if no selection is made send to scotland
    } else {
        res.redirect('order-lateral-flow-kits/symptoms-da')
    }
})

// country post-code change routing.
router.post('/delivery-postcode-change-answer', function (req, res) {
    var delPostcodeNew = req.session.data['delPostcode']
    if (delPostcodeNew == "SAME DA") {
        res.redirect('order-lateral-flow-kits/condition')
    } else {
        res.redirect('order-lateral-flow-kits/address-lookup/da-switch-confirm')
    }
})


// country DA change confirm routing - Change to Scotland.
router.post('/postcode-da-change-confirm', function (req, res) {
    var PostcodeChange = req.session.data['daChangeConfirm']
    if (PostcodeChange == "no") {
        res.redirect('order-lateral-flow-kits/address-lookup/delivery-address-select')
    } else {
        res.redirect('order-lateral-flow-kits/symptoms-da')
    }
})

// country DA change confirm routing da-switch-country-confirm.html 
router.post('/postcode-change-confirmation-answer', function (req, res) {
    var countryChange = req.session.data['countryChangeConfirm']
    var setCountry = req.session.data['deliveryPostcode']
    if (countryChange == "yes" && setCountry == "ENG 1ND") {
        res.redirect('order-lateral-flow-kits/condition')
    } else if (countryChange == "yes" && setCountry == "SC07 1ND" || 
            countryChange == "yes" && setCountry == "N0R 1ND" || 
            countryChange == "yes" && setCountry == "WA1 3LS") {
        res.redirect('order-lateral-flow-kits/symptoms-da')
    } else {
        res.redirect('order-lateral-flow-kits/address-lookup/delivery-address-postcode')
    }
})

// country radio buttons fall back. 
router.post('/country-answer', function (req, res) {
    var country = req.session.data['where-do-you-live']
    if (country == "england"){
        res.redirect('order-lateral-flow-kits/condition')
    } else if (country == "scotland") {
        res.redirect('order-lateral-flow-kits/scotland/eligibility-scotland')
    } else if (country == "ni"){
        res.redirect('order-lateral-flow-kits/ni/eligibility-ni')
    } else if (country == "wales"){
        res.redirect('order-lateral-flow-kits/wales/eligibility-wales')
    } else {
        res.redirect('order-lateral-flow-kits/condition')
    }
})

// test-reason-category.html routing.
router.post('/reason-category-answer', function (req, res) {
    var category = req.session.data['test-reason-category']
    if (category == "health"){
        res.redirect('order-lateral-flow-kits/test-reason-health')
    } else if (category == "work") {
        res.redirect('order-lateral-flow-kits/test-reason-work')
    } else if (category == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page')
        // if no selection is made send down the health route
    } else {
        res.redirect('order-lateral-flow-kits/test-reason-health')
    }
})

// scotland/test-reason-category-scotland.html routing.
router.post('/reason-category-answer-scotland', function (req, res) {
    var catscot = req.session.data['test-reason-category-scotland']
    if (catscot == "another"){
        res.redirect('order-lateral-flow-kits/scotland/exit-page-scotland')
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})

// ni/test-reason-category-ni.html routing.
router.post('/reason-category-answer-ni', function (req, res) {
    var catni = req.session.data['test-reason-category-ni']
    if (catni == "treatments"){
        res.redirect('order-lateral-flow-kits/login-choice')
    } else if (catni == "work") {
        res.redirect('order-lateral-flow-kits/adult-social-care-role')
    } else if (catni == "carer") {
        res.redirect('order-lateral-flow-kits/login-choice')
    } else if (catni == "gp") {
        res.redirect('order-lateral-flow-kits/date-asked-to-test')
    } else if (catni == "none") {
        res.redirect('order-lateral-flow-kits/ni/exit-page-ni')
        // if no selection is made send down the health route
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})

// wales/test-reason-category-wales.html routing.
router.post('/reason-category-answer-wales', function (req, res) {
    var catwales = req.session.data['test-reason-category-wales']
    if (catwales == "treatments"){
        res.redirect('order-lateral-flow-kits/login-choice')
    } else if (catwales == "gp") {
        res.redirect('order-lateral-flow-kits/date-asked-to-test')
    } else if (catwales == "none") {
        res.redirect('order-lateral-flow-kits/wales/exit-page-wales')
        // if no selection is made send down the health route
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})

// test-reason-health.html routing.
router.post('/reason-health-answer', function (req, res) {
    var health = req.session.data['test-reason-health']
    if (health == "treatments"){
        res.redirect('order-lateral-flow-kits/qualifying-condition')
    } else if (health == "procedure") {
        res.redirect('order-lateral-flow-kits/hospital-name')
    } else if (health == "gp") {
        res.redirect('order-lateral-flow-kits/date-asked-to-test')
    } else if (health == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page')
        // if no selection is made send to qualifying condition
    } else {
        res.redirect('order-lateral-flow-kits/qualifying-condition')
    }
})

// test-reason-work.html routing.
router.post('/reason-work-answer', function (req, res) {
    var work = req.session.data['test-reason-work']
    if (work == "ihp") {
        res.redirect('order-lateral-flow-kits/healthcare-provider-name')
    } else if (work == "ihpNoSymptoms") {
        res.redirect('order-lateral-flow-kits/test-reason-work-more')
    } else if (work == "nhsNoSymptoms") {
        res.redirect('order-lateral-flow-kits/test-reason-work-more')
    } else if (work == "socialpNoSymptoms") {
        res.redirect('order-lateral-flow-kits/return-to-work')
    } else if (work == "social") {
        res.redirect('order-lateral-flow-kits/adult-social-care-role')
    } else if (work == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})

// test-reason-work-more.html routing.
router.post('/reason-work-more-answer', function (req, res) {
    var workMore = req.session.data['test-reason-work-more']
    if (workMore == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page-test-pause')
    } else if (workMore == "ihpCovid") {
        res.redirect('order-lateral-flow-kits/healthcare-provider-name')
    } else if (workMore == "ihpWithHr") {
        res.redirect('order-lateral-flow-kits/healthcare-provider-name')
    } else if (workMore == "ihpAreHr") {
        res.redirect('order-lateral-flow-kits/healthcare-provider-name')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})


// qualifying-condition.html routing.
router.post('/treatment-eligible-answer', function (req, res) {
    var treatment = req.session.data['treatment-eligible']
    if (treatment == "no"){
        res.redirect('order-lateral-flow-kits/england/exit-page')
    } else {
        res.redirect('order-lateral-flow-kits/login-choice')
    }
})

// email.html routing.
router.post('/email-answer', function (req, res) {
    var email = req.session.data['do-you-have-email']
    if (email == "no"){
        res.redirect('order-lateral-flow-kits/call-us')
    } else {
        res.redirect('order-lateral-flow-kits/contact-mobile-number')
    }
})


// confirm-home-address routing.
router.post('/confirm-home-address-answer', function (req, res) {
    var home = req.session.data['confirmHomeAddress']
    if (home == "no") {
        res.redirect('order-lateral-flow-kits/address-lookup/home-address-postcode')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/check-answers')
    }
})

// return-to-work routing.
router.post('/return-to-work-answer', function (req, res) {
    var returnWork = req.session.data['return-to-work']
    if (returnWork == "no") {
        res.redirect('order-lateral-flow-kits/england/exit-page-test-pause')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/adult-social-care-role')
    }
})

// delivery address postcode if country select fall back has been used.
router.post('/delivery-address-postcode-answer', function (req, res) {
    var postcodeFallback = req.session.data['deliveryPostcode']
    var country = req.session.data['where-do-you-live']
    if (postcodeFallback == "ENG 1ND" && country == "england" || 
        postcodeFallback == "SC07 1ND" && country == "scotland" ||
        postcodeFallback == "N0R 1ND" && country == "ni" ||
        postcodeFallback == "WA1 3LS" && country == "wales" ) {
        res.redirect('order-lateral-flow-kits/address-lookup/delivery-address-select')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/address-lookup/da-switch-country-confirm')
    }
})


module.exports = router