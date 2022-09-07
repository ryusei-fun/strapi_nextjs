'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const stripe = require('stripe')('sk_test_51LeTALEnoPSWITTxP9j8FezL0ukMuM2Eb8kVGwGWjqnlCd1nx9Qv545AmnHZFGtqVlcq7YpvwQKDncSY3B2P259E00TXD3vo4Z');

// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token


module.exports = {
    create: async (ctx) => {
        const { address, amount, dishes, token } = JSON.parse(ctx.request.body);

        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'jpy',
            source: token,
            description: `Order ${new Date()} by ${ctx.state.user_id}`,
        });

        const order = await strapi.services.order.create({
            user: ctx.state.user_id,
            charge_id: charge.id,
            amount: amount,
            address,
            dishes,
        })

        return order;
    }
};
