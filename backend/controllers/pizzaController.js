import Pizza from '../models/Pizza.js';

const create = async (req, res) => {
    const { name, desc, price, url } = req.body;

    try {
        const pizza = await Pizza.create({
            name,
            desc,
            price,
            url,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        res.status(201).json({ message: 'Pizza criada com sucesso.', pizza });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar a pizza.' });
    }
};

const getAll = async (req, res) => {
    try {
        const pizzas = await Pizza.findAll();
        res.status(200).json(pizzas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar pizzas.' });
    }
};

const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const pizza = await Pizza.findByPk(id);
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza não encontrada.' });
        }
        res.status(200).json(pizza);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao buscar a pizza.' });
    }
};

const update = async (req, res) => {
    const { id } = req.params;
    const { name, desc, price, url } = req.body;

    try {
        const pizza = await Pizza.findByPk(id);
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza não encontrada.' });
        }

        await pizza.update({
            name,
            desc,
            price,
            url,
            updatedAt: new Date(),
        });

        res.status(200).json({ message: 'Pizza atualizada com sucesso.', pizza });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar a pizza.' });
    }
};

const remove = async (req, res) => {
    const { id } = req.params;

    try {
        const pizza = await Pizza.findByPk(id);
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza não encontrada.' });
        }

        await pizza.destroy();
        res.status(200).json({ message: 'Pizza deletada com sucesso.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar a pizza.' });
    }
};

export default { create, getAll, getById, update, remove };
