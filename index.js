console.info("Iniciando!");

var request = require("request");
var cheerio = require("cheerio");

var data = {
    relaxation: "78128021",
    Metodo: "listaLogradouro",
    TipoConsulta: "relaxation",
    StartRow: 1,
    EndRow: 10
};

var result = [];

const r = request.post(
    "http://www.buscacep.correios.com.br/sistemas/buscacep/resultadoBuscaCepEndereco.cfm",
    function(err, res, body) {
        const html = cheerio.load(body);

        html(".tmptabela tbody tr").each(function(i) {

            if (i > 0) {

                html(this).each(function() {
                    console.log(html(this).text());
                })

                // var tdLogradouro = html(this).html();
                // console.log(tdLogradouro);
            }
        });
    }
);

const form = r.form();

form.append("relaxation", "78128021");
form.append("Metodo", "listaLogradouro");
form.append("TipoConsulta", "relaxation");
form.append("StartRow", "1");
form.append("EndRow", "10");