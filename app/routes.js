const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'country'
router.post('/country-answer', function (req, res) {
    var country = req.session.data['where-do-you-live']
    if (country == "England"){
        res.redirect('order-lateral-flow-kits/condition')
    } else if (country == "Scotland") {
        res.redirect('/ineligible')
    } else if (country == "Northern Ireland"){
        res.redirect('/somthing-else')
    } else {
        res.redirect('/somthing-else-else')
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
        res.redirect('order-lateral-flow-kits/#')
    } else if (health == "gp") {
        res.redirect('order-lateral-flow-kits/#')
    } else if (health == "another") {
        res.redirect('order-lateral-flow-kits/england/exit-page')
        // if no selection is made send down the health route
    } else {
        res.redirect('order-lateral-flow-kits/qualifying-condition')
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
module.exports = router


