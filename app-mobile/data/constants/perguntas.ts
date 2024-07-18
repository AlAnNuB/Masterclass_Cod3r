import Pergunta from '@/data/model/Pergunta'

const perguntas: Pergunta[] = [
    {
        id: 1,
        enunciado: 'Qual é o maior planeta do sistema solar?',
        opcoes: ['Terra', 'Júpiter', 'Saturno', 'Urano'],
        resposta: 1,
    },
    {
        id: 2,
        enunciado: 'Quantos planetas existem no sistema solar?',
        opcoes: ['8', '9', '7', '10'],
        resposta: 0,
    },
    {
        id: 3,
        enunciado: "Qual planeta é conhecido como o 'Planeta Vermelho'?",
        opcoes: ['Marte', 'Vênus', 'Júpiter', 'Saturno'],
        resposta: 0,
    },
    {
        id: 4,
        enunciado: 'Qual planeta é famoso pelos seus anéis?',
        opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
        resposta: 2,
    },
    {
        id: 5,
        enunciado: 'Qual é o planeta mais frio do sistema solar?',
        opcoes: ['Netuno', 'Urano', 'Saturno', 'Plutão'],
        resposta: 1,
    },
    {
        id: 6,
        enunciado: 'Qual planeta é o mais próximo do Sol?',
        opcoes: ['Terra', 'Mercúrio', 'Vênus', 'Marte'],
        resposta: 1,
    },
    {
        id: 7,
        enunciado: 'Qual é a maior lua de Saturno?',
        opcoes: ['Titã', 'Europa', 'Ganimedes', 'Calisto'],
        resposta: 0,
    },
    {
        id: 8,
        enunciado: 'Qual planeta tem um dia mais longo que seu ano?',
        opcoes: ['Vênus', 'Mercúrio', 'Marte', 'Netuno'],
        resposta: 0,
    },
    {
        id: 9,
        enunciado: "Qual planeta é conhecido como o 'gigante gasoso'?",
        opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
        resposta: 0,
    },
    {
        id: 10,
        enunciado: 'Qual planeta tem a maior montanha do sistema solar?',
        opcoes: ['Terra', 'Marte', 'Vênus', 'Mercúrio'],
        resposta: 1,
    },
    {
        id: 11,
        enunciado: 'Qual é o nome da galáxia em que vivemos?',
        opcoes: ['Via Láctea', 'Andrômeda', 'Triângulo', 'Centaurus A'],
        resposta: 0,
    },
    {
        id: 12,
        enunciado: 'Quantas luas tem Marte?',
        opcoes: ['1', '2', '3', '4'],
        resposta: 1,
    },
    {
        id: 13,
        enunciado: 'Qual é a maior lua do sistema solar?',
        opcoes: ['Titã', 'Ganimedes', 'Calisto', 'Europa'],
        resposta: 1,
    },
    {
        id: 14,
        enunciado: 'Qual planeta é conhecido por ter uma grande mancha vermelha?',
        opcoes: ['Marte', 'Júpiter', 'Saturno', 'Vênus'],
        resposta: 1,
    },
    {
        id: 15,
        enunciado: 'Qual é o menor planeta do sistema solar?',
        opcoes: ['Mercúrio', 'Marte', 'Vênus', 'Plutão'],
        resposta: 0,
    },
    {
        id: 16,
        enunciado: 'Qual é o nome do segundo maior planeta do sistema solar?',
        opcoes: ['Urano', 'Netuno', 'Saturno', 'Júpiter'],
        resposta: 2,
    },
    {
        id: 17,
        enunciado: 'Qual é o nome do rover que a NASA enviou a Marte em 2021?',
        opcoes: ['Curiosity', 'Spirit', 'Opportunity', 'Perseverance'],
        resposta: 3,
    },
    {
        id: 18,
        enunciado: 'Quantas estrelas existem na Via Láctea?',
        opcoes: [
            'Cerca de 100 bilhões',
            'Cerca de 200 bilhões',
            'Cerca de 300 bilhões',
            'Cerca de 400 bilhões',
        ],
        resposta: 3,
    },
    {
        id: 19,
        enunciado: 'Qual é a principal composição da atmosfera de Vênus?',
        opcoes: ['Oxigênio', 'Hidrogênio', 'Nitrogênio', 'Dióxido de carbono'],
        resposta: 3,
    },
    {
        id: 20,
        enunciado: 'Qual é a estrela mais próxima da Terra depois do Sol?',
        opcoes: ['Proxima Centauri', 'Betelgeuse', 'Alpha Centauri A', 'Sirius'],
        resposta: 0,
    },
    {
        id: 21,
        enunciado: 'Qual é a unidade de medida usada para distâncias dentro do sistema solar?',
        opcoes: ['Anos-luz', 'Parsecs', 'Unidade Astronômica', 'Quilômetros'],
        resposta: 2,
    },
    {
        id: 22,
        enunciado: 'O que é um buraco negro?',
        opcoes: [
            'Uma estrela em colapso',
            'Um planeta sem atmosfera',
            'Uma região de espaço-tempo de onde nada pode escapar',
            'Um tipo de cometa',
        ],
        resposta: 2,
    },
    {
        id: 23,
        enunciado: 'Qual planeta tem as maiores variações de temperatura entre o dia e a noite?',
        opcoes: ['Mercúrio', 'Marte', 'Terra', 'Vênus'],
        resposta: 0,
    },
    {
        id: 24,
        enunciado: 'Qual é o nome da maior lua de Netuno?',
        opcoes: ['Titã', 'Europa', 'Tritão', 'Io'],
        resposta: 2,
    },
    {
        id: 25,
        enunciado: 'Qual planeta tem ventos que podem chegar a 2.100 km/h?',
        opcoes: ['Júpiter', 'Saturno', 'Netuno', 'Urano'],
        resposta: 2,
    },
    {
        id: 26,
        enunciado: 'Qual é a principal composição das nuvens de Vênus?',
        opcoes: ['Água', 'Metano', 'Ácido sulfúrico', 'Amoníaco'],
        resposta: 2,
    },
    {
        id: 27,
        enunciado: 'Qual é a maior estrutura conhecida no universo?',
        opcoes: [
            'Superaglomerado de Hércules',
            'Grande Muralha de Sloan',
            'Grande Atrator',
            'Grande Muralha de Bóotes',
        ],
        resposta: 1,
    },
    {
        id: 28,
        enunciado: 'Qual planeta tem um sistema de anéis mais complexo?',
        opcoes: ['Júpiter', 'Urano', 'Netuno', 'Saturno'],
        resposta: 3,
    },
    {
        id: 29,
        enunciado: 'Qual foi o primeiro satélite artificial lançado ao espaço?',
        opcoes: ['Sputnik 1', 'Explorer 1', 'Vanguard 1', 'Luna 1'],
        resposta: 0,
    },
    {
        id: 30,
        enunciado: 'Qual é o tempo de rotação da Terra em torno de seu eixo?',
        opcoes: ['24 horas', '23 horas e 56 minutos', '24 horas e 30 minutos', '23 horas'],
        resposta: 1,
    },
]

export default perguntas
