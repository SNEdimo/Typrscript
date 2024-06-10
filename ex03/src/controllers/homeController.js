exports.paginainicial = (req, ans) => {
    ans.render('home');
}

exports.tratapost = (req, ans) => {
    ans.send(`caiu post`);
}