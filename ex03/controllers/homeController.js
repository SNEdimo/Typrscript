exports.paginainicial = (req, ans) => {
    req.setEncoding(`
        <form action="/" method="post">
            nome do cliente: <input type="text" name="name">
            <button>enviar</button>
        </form>`
    )
}