import prisma from "../database/client.js";


const controller = {};

controller.create = async function (req, res) {
    try {
        await prisma.cliente.create({ data: req.body })
        res.status(201).send()
    }
    catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

controller.retrieveAll = async function (req, res) {
    try {
        const result = await prisma.cliente.findMany({
            orderBy: [{ descricao: "asc" }]
        })
        res.send(result)
    }
    catch (error) {
        console.error(error)
        req.status(500).send(error)
    }
}

controller.retrieveOne = async function (req, res) {
    try {
        const result = await prisma.cliente.findUnique({
            where: { id: req.params.id }
        })

        if (result) res.send(result)
        else res.status(404).end()
    }
    catch (error) {
        console.error(error)

        res.status(500).send(error)
    }
}

controller.update = async function (req, res) {
    try {
        const result = await prisma.cliente.update({
            where: { id: req.params.id },
            data: req.body
        })

        if (result) res.status(204).end()
        else res.status(404).end()
    }
    catch (error) {
        console.error(error)

        res.status(500).send(error)
    }
}

controller.delete = async function (req, res) {
    try {
        await prisma.cliente.delete({
            where: { id: req.params.id }
        })

        res.status(204).end()

    }
    catch (error) {
        if (error?.code === 'P2025') {
            res.status(404).end()
        }
        else {
            console.error(error)

            res.status(500).send(error)
        }
    }
}

export default controller;