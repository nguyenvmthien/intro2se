const withdrawModel = require('../models/WithdrawModel');
class Withdraw_Controller {
    renderSaWithdraw(req, res) {
        res.render('sa_withdraw');
    }

    renderSaWithdrawAccount(req, res) {
        res.render('sa_withdraw_account');
    }

    async withdraw(req, res) {
        const { id_account, money_withdraw, withdraw_date } = req.body;

        try {
            const result = await withdrawModel.withdraw({
                id_account,
                money_withdraw,
                withdraw_date,
            });
            res.json(result);
        }
        catch {
            console.error('Error withdraw:', err);
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new Withdraw_Controller();
