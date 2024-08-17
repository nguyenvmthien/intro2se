class Create_Account_Controller {
    renderSaCreate(req, res) {
        res.render('sa_create');
    }

    async create(req, res) {
        if (Object.keys(req.body).length === 0) {
            //console.log('No data');
            return;
        }

        const {
            id_card,
            customer_name,
            customer_address,
            money,
            type_of_saving,
            date_created,
        } = req.body;
        console.log(
            id_card,
            customer_name,
            customer_address,
            id_account,
            money,
            type_of_saving,
            date_created,
        );
        id_account = accountModel.getNewestIDAccount();
        accountModel.create({
            id_card,
            customer_name,
            customer_address,
            id_account,
            money,
            type_of_saving,
            date_created,
        });
        res.render('sa_create', { message: 'success' });
    }
}

module.exports = new Create_Account_Controller();
