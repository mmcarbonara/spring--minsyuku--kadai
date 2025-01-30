const stripe = Stripe('pk_test_51QbjX92LqmhYbMcTe3NaHV1ax0YgFCHsAiN8PXWGD3W4tFCKGCd1ThYOcDNx6aj82yittzilAGAUNSmdqITE4wtW00rOj1otfp');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});