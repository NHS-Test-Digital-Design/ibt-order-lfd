const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'country'
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
    } else if (work == "social") {
        res.redirect('order-lateral-flow-kits/adult-social-care-role')
    } else if (work == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page')
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
module.exports = router


// confirm-delivery-address routing.
router.post('/confirm-delivery-address-answer', function (req, res) {
    var delivery = req.session.data['confirmDeliveryAddress']
    if (delivery == "no") {
        res.redirect('order-lateral-flow-kits/address-lookup/delivery-address-postcode')
        // if no selection is made send to login choice
    } else {
        res.redirect('order-lateral-flow-kits/check-answers')
    }
})
