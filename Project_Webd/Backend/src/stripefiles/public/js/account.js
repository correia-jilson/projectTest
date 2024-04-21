$(document).ready(function() {
    const publishableKey = 'PUBLISHABLE_KEY'

    const stripe = Stripe(
        publishableKey)
    const checkoutButton = $('#checkout-button')
    const manageBillingButton = $('#manage-billing-button')

    checkoutButton.click(function () {
        const product = $("input[name='product']:checked").val()

fetch('/checkout',{
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json',
        'email': customer.email
    },
    body: JSON.stringify({
        product, 
        customerID: customer.billingID
    })
    })

        .then((result) => result.json())
        .then(({ sessionid }) => stripe.redirectToCheckout({ sessionid }))
    })

manageBillingButton.click(function(){

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            email: customer.email
        },
        body: JSON.stringify({
            customer: customer.billingID
        })
    }
    fetch('/billing', requestOptions)
        .then((response) => response.json())
        .then((result) => window.location.replace(result.ur))
        .catch((error) => console.log('error', error))
    })
})