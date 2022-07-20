const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'country'
router.post('/country-answer', function (req, res) {
    // Make a variable and give it the value from 'where-do-you-live'
    var country = req.session.data['where-do-you-live']
    // Check whether the variable matches a condition
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
        res.redirect('order-lateral-flow-kits/england-exit-page')
        // if no selection is made send down the health route
    } else {
        res.redirect('order-lateral-flow-kits/test-reason-health')
    }
})

module.exports = router


