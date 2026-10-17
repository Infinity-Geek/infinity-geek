import json
import hashlib
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

FONTES = {
    "filmes": [
        "https://www.omelete.com.br/rss",
    ],
    "games": [
        "https://www.eurogamer.pt/feed",
    ],
    "esports": [
        "https://www.google.com/search?q=valorant+esports&tbm=nws",
    ],
    "musica": [
        "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    ],
    "esportes": [
        "https://ge.globo.com/rss/ge/",
    ],
}

ARQUIVO = Path(__file__).with_name("noticias.json")


def buscar_rss(url):
    requisicao = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0"}
    )

    with urllib.request.urlopen(requisicao, timeout=20) as resposta:
        return ET.fromstring(resposta.read())


def texto(item, nome):
    elemento = item.find(nome)
    return "".join(elemento.itertext()).strip() if elemento is not None else ""


def buscar_noticias():
    noticias = []
    links_vistos = set()

    for categoria, fontes in FONTES.items():
        for url in fontes:
            try:
                raiz = buscar_rss(url)

                for item in raiz.findall(".//item")[:15]:
                    titulo = texto(item, "title")
                    link = texto(item, "link")
                    descricao = texto(item, "description")
                    data = texto(item, "pubDate")

                    if not titulo or not link or link in links_vistos:
                        continue

                    links_vistos.add(link)

                    identificador = int(
                        hashlib.sha256(link.encode()).hexdigest()[:12],
                        16
                    )

                    noticias.append({
                        "id": identificador,
                        "categoria": categoria,
                        "titulo": titulo,
                        "descricao": descricao[:250],
                        "conteudo": descricao,
                        "imagem": "",
                        "data": data,
                        "fonte": link
                    })

                print(f"Fonte consultada: {url}")

            except Exception as erro:
                print(f"Erro ao consultar {url}: {erro}")

    return noticias


def main():
    novas = buscar_noticias()

    if not novas:
        print("Nenhuma notícia encontrada. Arquivo anterior preservado.")
        return

    ARQUIVO.write_text(
        json.dumps(novas, ensure_ascii=False, indent=2),
        encoding="utf-8"
    )

    print(f"{len(novas)} notícias salvas em noticias.json")


if __name__ == "__main__":
    main()