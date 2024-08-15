
const cartas = [
  {
    "nome": "island",
    "tipo": "terreno",
    "subtipo": "Ilha",
    "quantidade": "8",
    "custo_mana": "",
    "custo_mana_total": "",
    "texto": "nenhum",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "normal",
    "colecao": "The Brothers' War",
    "num_serie": "276",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "nenhum",
        "descricao": "0",
        "tipo": "0",
      }
    ]
  },
  {
    "nome": "forest",
    "tipo": "terreno",
    "subtipo": "Floresta",
    "quantidade": "8",
    "custo_mana": "",
    "custo_mana_total": "",
    "texto": "nenhum",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "normal",
    "colecao": "The Brothers' War",
    "num_serie": "277",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "nenhum",
        "descricao": "0",
        "tipo": "0",
      }
    ]
  },
  {
    "nome": "swamp",
    "tipo": "terreno",
    "subtipo": "Pântano",
    "quantidade": "8",
    "custo_mana": "",
    "custo_mana_total": "",
    "texto": "nenhum",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "normal",
    "colecao": "The Brothers' War",
    "num_serie": "278",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "nenhum",
        "descricao": "0",
        "tipo": "0",
      }
    ]
  },
  {
    "nome": "plains",
    "tipo": "terreno",
    "subtipo": "Planície",
    "quantidade": "8",
    "custo_mana": "",
    "custo_mana_total": "",
    "texto": "nenhum",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "normal",
    "colecao": "The Brothers' War",
    "num_serie": "279",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "nenhum",
        "descricao": "0",
        "tipo": "0",
      }
    ]
  },
  {
    "nome": "lightning bolt",
    "tipo": "feitiço",
    "subtipo": "Instantâneo",
    "quantidade": "4",
    "custo_mana": "1R",
    "custo_mana_total": "1R",
    "texto": "Lightning Bolt causa 3 pontos de dano a qualquer alvo.",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "comum",
    "colecao": "The Brothers' War",
    "num_serie": "280",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Dano",
        "descricao": "3 pontos de dano",
        "tipo": "Direto",
      }
    ]
  },
  {
    "nome": "giant growth",
    "tipo": "feitiço",
    "subtipo": "Feitiço",
    "quantidade": "4",
    "custo_mana": "1G",
    "custo_mana_total": "1G",
    "texto": "Giant Growth aumenta a força e a resistência de uma criatura em +3/+3.",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "comum",
    "colecao": "The Brothers' War",
    "num_serie": "281",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Aumento",
        "descricao": "+3/+3",
        "tipo": "Aumento",
      }
    ]
  },
  {
    "nome": "counterspell",
    "tipo": "feitiço",
    "subtipo": "Instantâneo",
    "quantidade": "4",
    "custo_mana": "UU",
    "custo_mana_total": "UU",
    "texto": "Counterspell anula qualquer feitiço alvo.",
    "forca": "",
    "resistencia": "",
    "lealdade": "",
    "raridade": "comum",
    "colecao": "The Brothers' War",
    "num_serie": "282",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Anulação",
        "descricao": "Anula um feitiço",
        "tipo": "Anulação",
      }
    ]
  },
  {
    "nome": "serra angel",
    "tipo": "criatura",
    "subtipo": "Anjo",
    "quantidade": "3",
    "custo_mana": "3WW",
    "custo_mana_total": "3WW",
    "texto": "Vôo, Vigilância. Força 4, Resistência 4.",
    "forca": "4",
    "resistencia": "4",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "283",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Vigilância",
        "descricao": "Não precisa virar para atacar.",
        "tipo": "Habilidade de Vigilância",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "bane slayer angel",
    "tipo": "criatura",
    "subtipo": "Anjo",
    "quantidade": "1",
    "custo_mana": "1WWW",
    "custo_mana_total": "1WWW",
    "texto": "Vôo, Vigilância, Proteção contra demônios e dragões. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "mítica",
    "colecao": "The Brothers' War",
    "num_serie": "285",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Vigilância",
        "descricao": "Não precisa virar para atacar.",
        "tipo": "Habilidade de Vigilância",
      },
      {
        "nome": "Proteção",
        "descricao": "Protege contra demônios e dragões.",
        "tipo": "Proteção",
      }
    ]
  },
  {
    "nome": "shivan dragon",
    "tipo": "criatura",
    "subtipo": "Dragão",
    "quantidade": "2",
    "custo_mana": "4RR",
    "custo_mana_total": "4RR",
    "texto": "Vôo. Pode pagar 1R para dar +1 ponto de dano a qualquer alvo. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "rara",
    "colecao": "The Brothers' War",
    "num_serie": "284",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Fogo",
        "descricao": "Pode pagar 1R para dar +1 ponto de dano.",
        "tipo": "Habilidade de Fogo",
      }
    ]
  },
  {
    "nome": "bane slayer angel",
    "tipo": "criatura",
    "subtipo": "Anjo",
    "quantidade": "1",
    "custo_mana": "1WWW",
    "custo_mana_total": "1WWW",
    "texto": "Vôo, Vigilância, Proteção contra demônios e dragões. Força 5, Resistência 5.",
    "forca": "5",
    "resistencia": "5",
    "lealdade": "",
    "raridade": "mítica",
    "colecao": "The Brothers' War",
    "num_serie": "285",
    "imagem_url": "URL da Imagem",
    "habilidades": [
      {
        "nome": "Vôo",
        "descricao": "Não pode ser bloqueada exceto por criaturas com vôo ou alcance.",
        "tipo": "Habilidade de Vôo",
      },
      {
        "nome": "Vigilância",
        "descricao": "Não precisa virar para atacar.",
        "tipo": "Habilidade de Vigilância",
      },
      {
        "nome": "Proteção",
        "descricao": "Protege contra demônios e dragões.",
        "tipo": "Proteção",
      }
    ]
  }
 ]