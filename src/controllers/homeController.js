import path from "path"

const getHome = async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname, "./public/index.html"))
        res.status(200)
    } catch (error) {
        res.json(error)
            .status(500)
    }
}

export { getHome }