function poputalteUFs() {
    const ufSelect = document.querySelector("select[name=uf")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += ` <option value="${state.id}">${state.nome}</option> `
            }
        })
}

poputalteUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = `<option value="">Selecione a Ciadade</option>`
    citySelect.disabled = false

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += ` <option value="${city.nome}">${city.nome}</option> `
            }
            citySelect.disabled = false

        })
}

document
    .querySelector("select[name=uf")
    .addEventListener("change", getCities)