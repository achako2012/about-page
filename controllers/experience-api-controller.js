import Experience from "../models/Experience.js";

export const getAll = async (req, res) => {
    const works = await Experience.find({}, (err, doc) => {

        if (err) console.log(err)

        console.log(doc)
    })

    res.status(200).json(works)
}

export const create = async (req, res) => {
    const {company, position, date, obligations} = req.body

    const work = {
        company: company,
        position: position,
        date: date,
        obligations: obligations
    }

    await Experience.create(work, (err, doc) => {

        if (err) console.log(err)

        console.log("Object work-list is saved", doc)
    })

    res.status(201).json(req.body)
}

export const deleteWorkById = async (req, res) => {
    const workId = req.body.id

    await Experience.findOneAndDelete({_id: workId}, (err, result) => {

        if (err) console.log(err)

        console.log(result)
    })

    res.status(200).json({"message": "work-list"})
}