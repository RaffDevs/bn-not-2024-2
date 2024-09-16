import prisma from "../database/client.js";


const controller = {};

controller.create = async function(req, res) {
    try {
        await prisma.categoria.create({ data: req.body})
        res.status(201).send()
    }
    catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}

controller.retriveOne = async function(req, res) {
    try {
        const result = await prisma.categoria.findFirstOrThrow({
            where: { id: req.params.id }
        })
        res.send(result)
    }
    catch(error) {
        console.log(error)
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function(req, res) {
    try {
        const result = await prisma.categoria.findMany({
            orderBy: [{ descricao: "asc" }]
        })
        res.send(result)
    }
    catch(error) {
        console.error(error)
        req.status(500).send(error)
    }
}

export default controller;