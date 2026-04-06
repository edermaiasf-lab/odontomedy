const CLINICA_DADOS = {
    identidade: {
        nome: "Odontomedy",
        slogan: "Clínica Multidisciplinar & Radiologia Digital",
        cores: {
            primaria: "#003087",     // Azul Marinho
            secundaria: "#00A651",   // Verde Vibrante
            destaque: "#FFC72C",     // Amarelo Dourado
            alerta: "#EF3340"        // Vermelho
        }
    },
    contato: {
        telefones: ["(64) 98412-6400"],
        whatsapp: ["(64) 98412-6400"],
        email: "odontomedy@hotmail.com",
        endereco: "R. Manoel Lemos de Mendonça, Qd. 2 Lt. 5 - Centro, Morrinhos - GO, 75650-042",
        horario: [
            { dia: "Segunda a Sexta", hora: "07:00–11:30 / 13:00–19:00" },
            { dia: "Sábado", hora: "08:00–12:00" },
            { dia: "Domingo", hora: "Fechado" }
        ],
        site: "www.odontomedy.com.br",
        instagram: ["@clinicaodontomedy", "@radiologiaodontomedy", "@comitivaeharasodontomedy"]
    },
    profissionais: [
        { nome: "Dra. Ana Angélica Paiva O. Amaral", especialidade: "Clínica Médica", registro: "CRM-GO 33585", icone: "medical_services", slug: "ana-angelica-amaral" },
        { nome: "Dr. Brayan Inácio Apolinário Silveira", especialidade: "Cirurgião-Dentista", registro: "CRO-GO 24673", icone: "dentistry", destaque: true, slug: "brayan-silveira" },
        { nome: "Dra. Bruna Timóteo Teixeira", especialidade: "Enfermeira", registro: "COREN-GO 951804", icone: "local_hospital", slug: "bruna-teixeira" },
        { nome: "Dr. Célio Ribeiro de Barros", especialidade: "Psiquiatra", registro: "CRM-GO 9841", descricao: "e Distúrbios do Sono", icone: "psychology", slug: "celio-barros" },
        { nome: "Dr. Cláudio Daniel Serafim", especialidade: "Cirurgião-Dentista", registro: "CRO-GO 4788", descricao: "Responsável Técnico", icone: "dentistry", destaque: true, slug: "claudio-daniel-serafim" },
        { nome: "Dra. Coraci Valéria M. Campos", especialidade: "Psicóloga", registro: "CRP-GO 3309", icone: "self_improvement", slug: "coraci-campos" },
        { nome: "Dr. Gorélio Horácio Ferreira Santos", especialidade: "Nutricionista", registro: "CRN-GO P/21242", icone: "nutrition", slug: "gorelio-santos" },
        { nome: "Dr. Herman Silveira Dutra", especialidade: "Dermatologista", registro: "CRM-GO 9022", icone: "face", slug: "herman-dutra" },
        { nome: "Dra. Mariana A. Ribeiro Pantaleão", especialidade: "Cirurgiã-Dentista", registro: "CRO-GO 19836", icone: "dentistry", destaque: true, slug: "mariana-pantaleao" },
        { nome: "Dra. Michelle Alves do Vale", especialidade: "Endodontista", registro: "CRO-GO 18132", icone: "dentistry", slug: "michelle-vale" },
        { nome: "Dra. Pryscylla Gonçalves Rosa", especialidade: "Cirurgiã-Dentista", registro: "CRO-GO 22115", icone: "dentistry", slug: "pryscylla-rosa" },
        { nome: "Dra. Silvia Nunes Dias", especialidade: "Clínico Geral", registro: "CRO-GO 9751", icone: "dentistry", slug: "silvia-nunes" },
        { nome: "Tec. Rad. Jener José Serafim", especialidade: "Técnico Radiologia", registro: "CRTR-GO 958", icone: "radiology", slug: "jener-serafim" },
        { nome: "TPD. Rívia Serafim Santos", especialidade: "Técnico Prótese Dentária", registro: "CRO-GO 353", icone: "medication", slug: "rivia-santos" },
        { nome: "Dra. Vitória Karoliny Mendes", especialidade: "Cirurgiã-Dentista", registro: "CRO-GO 22684", icone: "dentistry", slug: "vitoria-mendes" }
    ],
    servicos: [
        { titulo: "Odontologia Especializada", descricao: "Tratamentos odontológicos de alta performance, estética e reabilitação oral.", icone: "dentistry", categoria: "dentista" },
        { titulo: "Radiologia 3D", descricao: "Diagnósticos por imagem digital de alta precisão para segurança nos tratamentos.", icone: "radiology", categoria: "tec-radiologia" },
        { titulo: "Clínica Médica", descricao: "Cuidado integrado com a sua saúde física e bem-estar contínuo.", icone: "medical_services", categoria: "medico" },
        { titulo: "Psiquiatria e Psicologia", descricao: "Atenção completa à sua saúde mental, autoconhecimento e distúrbios do sono.", icone: "psychology", categoria: "saude-mental" },
        { titulo: "Dermatologia", descricao: "Saúde e estética avançada para a sua pele, cabelo e unhas.", icone: "face", categoria: "medico" },
        { titulo: "Nutrição", descricao: "Planos alimentares individualizados visando sua qualidade de vida.", icone: "nutrition", categoria: "nutricionista" }
    ]
};
