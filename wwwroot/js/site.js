async function pesquisar() {

    // Pega todos os seletores com classe "clean" e armazena em uma const
    const elementsToClean = document.getElementsByClassName('clean');

    // Limpa o conteudo de cada seletor com a classe "clean"
    Array.from(elementsToClean).forEach(element => {
        element.innerHTML = '';
    });

    // Captura o conteudo digitado no input
    const pesquisa = document.getElementById('search').value;

    // Cria uma variavel para contabilizar todos os registros
    var qtd_reg = 0;

    try {

        // Realiza um requisição para a API criada passando a const "pesquisa" via GET
        const response = await axios.get(`http://localhost:7280/api/data/search?searchTerm=${pesquisa}`);

        // Se quantidade de rigistros for maior que 0, faz o preenchimento dos dados no bloco.
        if (response.data.sales.length > 0) {
            const salesContainer = document.getElementById('sales');
            response.data.sales.forEach((item, index) => {
                // Criar um contêiner para cada equipamento
                const container = document.createElement('div');
                container.classList.add('my-2', 'd-flex', 'justify-content-start', 'w-100', 'align-items-center');

                // Criar elementos para as informações do equipamento
                const hashtagId = document.createElement('span');
                const productName = document.createElement('span');
                const productValue = document.createElement('span');

                // Adiciona as classes nos elementos criados
                hashtagId.classList.add('fs-5', 'fw-semibold', 'w-25', 'text-center');
                productName.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-50');
                productValue.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-25');

                // Preencher os elementos com os dados do equipamento
                hashtagId.innerHTML = `<a href="#" style="color:red;">#${item.salesOrderID}</a>`;
                productName.textContent = item.materialName;
                productValue.textContent = 'Qtd: ' + item.quantity + ' pç';

                // Adicionar elementos ao contêiner
                container.appendChild(hashtagId);
                container.appendChild(productName);
                container.appendChild(productValue);

                // Adicionar o contêiner ao contêiner pai (salesContainer)
                salesContainer.appendChild(container);
            });

            // Atualizar a quantidade total de registros
            qtd_reg += response.data.sales.length;

            document.getElementById('qtd_reg_sales').innerHTML = '(' + response.data.sales.length + ' items encontrados)';

            // Se não houver registros, no lugar do conteudo é escrito 'Nenhum item encontrado' 
        } else {
            const sales = document.getElementById('sales');
            const result = document.createElement('p');
            result.classList.add('text-center')
            result.innerHTML = 'Nenhum item encontrado';
            sales.appendChild(result);
        }

        // Se quantidade de rigistros for maior que 0, faz o preenchimento dos dados no bloco.
        if (response.data.purchase.length > 0) {
            const purchaseContainer = document.getElementById('purchase');
            response.data.purchase.forEach((item, index) => {
                // Criar um contêiner para cada equipamento
                const container = document.createElement('div');
                container.classList.add('my-2', 'd-flex', 'justify-content-start', 'w-100', 'align-items-center');

                // Criar elementos para as informações do equipamento
                const hashtagId = document.createElement('span');
                const productName = document.createElement('span');
                const productValue = document.createElement('span');

                // Adiciona as classes nos elementos criados
                hashtagId.classList.add('fs-5', 'fw-semibold', 'w-25', 'text-center');
                productName.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-50');
                productValue.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-25');

                // Preencher os elementos com os dados do equipamento
                hashtagId.innerHTML = `<a href="#" style="color:red;">#${item.purchaseOrderID}</a>`;
                productName.textContent = item.materialName;
                productValue.textContent = 'Qtd: ' + item.quantity + ' pç';

                // Adicionar elementos ao contêiner
                container.appendChild(hashtagId);
                container.appendChild(productName);
                container.appendChild(productValue);

                // Adicionar o contêiner ao contêiner pai (purchaseContainer)
                purchaseContainer.appendChild(container);
            });

            // Atualizar a quantidade total de registros
            qtd_reg += response.data.purchase.length;
            document.getElementById('qtd_reg_purchase').innerHTML = '(' + response.data.purchase.length + ' items encontrados)';

            // Se não houver registros, no lugar do conteudo é escrito 'Nenhum item encontrado' 
        } else {
            const purchase = document.getElementById('purchase');
            const result = document.createElement('p');
            result.classList.add('text-center')
            result.innerHTML = 'Nenhum item encontrado';
            purchase.appendChild(result);
        }

        // Se quantidade de rigistros for maior que 0, faz o preenchimento dos dados no bloco.
        if (response.data.materials.length > 0) {
            const materialsContainer = document.getElementById('materials');
            response.data.materials.forEach((item, index) => {
                // Criar um contêiner para cada equipamento
                const container = document.createElement('div');
                container.classList.add('my-2', 'd-flex', 'justify-content-start', 'w-100', 'align-items-center');

                // Criar elementos para as informações do equipamento
                const hashtagId = document.createElement('span');
                const productName = document.createElement('span');

                // Adiciona as classes nos elementos criados
                hashtagId.classList.add('fs-5', 'fw-semibold', 'w-25', 'text-center');
                productName.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-75');


                // Preencher os elementos com os dados do equipamento
                hashtagId.innerHTML = `<a href="#" style="color:red;">#${item.materialID}</a>`;
                productName.textContent = item.materialName;


                // Adicionar elementos ao contêiner
                container.appendChild(hashtagId);
                container.appendChild(productName);


                // Adicionar o contêiner ao contêiner pai (materialsContainer)
                materialsContainer.appendChild(container);
            });

            // Atualizar a quantidade total de registros
            qtd_reg += response.data.materials.length;
            document.getElementById('qtd_reg_materials').innerHTML = '(' + response.data.materials.length + ' items encontrados)';

            // Se não houver registros, no lugar do conteudo é escrito 'Nenhum item encontrado' 
        } else {
            const materials = document.getElementById('materials');
            const result = document.createElement('p');
            result.classList.add('text-center')
            result.innerHTML = 'Nenhum item encontrado';
            materials.appendChild(result);
        }

        // Se quantidade de rigistros for maior que 0, faz o preenchimento dos dados no bloco.
        if (response.data.equipments.length > 0) {
            const equipmentsContainer = document.getElementById('equipments');
            response.data.equipments.forEach((item, index) => {
                // Criar um contêiner para cada equipamento
                const container = document.createElement('div');
                container.classList.add('my-2', 'd-flex', 'justify-content-start', 'w-100', 'align-items-center');

                // Criar elementos para as informações do equipamento
                const hashtagId = document.createElement('span');
                const productName = document.createElement('span');

                // Adiciona as classes nos elementos criados
                hashtagId.classList.add('fs-5', 'fw-semibold', 'w-25', 'text-center');
                productName.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-75');


                // Preencher os elementos com os dados do equipamento
                hashtagId.innerHTML = `<a href="#" style="color:red;">#${item.equipmentID}</a>`;
                productName.textContent = item.equipmentName;


                // Adicionar elementos ao contêiner
                container.appendChild(hashtagId);
                container.appendChild(productName);


                // Adicionar o contêiner ao contêiner pai (equipmentsContainer)
                equipmentsContainer.appendChild(container);
            });

            // Atualizar a quantidade total de registros
            qtd_reg += response.data.equipments.length;
            document.getElementById('qtd_reg_equipments').innerHTML = '(' + response.data.equipments.length + ' items encontrados)';

            // Se não houver registros, no lugar do conteudo é escrito 'Nenhum item encontrado' 
        } else {
            const equipments = document.getElementById('equipments');
            const result = document.createElement('p');
            result.classList.add('text-center')
            result.innerHTML = 'Nenhum item encontrado';
            equipments.appendChild(result);
        }

        // Se quantidade de rigistros for maior que 0, faz o preenchimento dos dados no bloco.
        if (response.data.workforce.length > 0) {
            const workforceContainer = document.getElementById('workforce');
            response.data.workforce.forEach((item, index) => {
                // Criar um contêiner para cada equipamento
                const container = document.createElement('div');
                container.classList.add('my-2', 'd-flex', 'justify-content-start', 'w-100', 'align-items-center');

                // Criar elementos para as informações do equipamento
                const hashtagId = document.createElement('span');
                const productName = document.createElement('span');
                const productValue = document.createElement('span');

                // Adiciona as classes nos elementos criados
                hashtagId.classList.add('fs-5', 'fw-semibold', 'w-25', 'text-center');
                productName.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-50');
                productValue.classList.add('fs-5', 'fw-semibold', 'ms-5', 'w-25');

                // Preencher os elementos com os dados do equipamento
                hashtagId.innerHTML = `<a href="#" style="color:red;">#${item.workforceID}</a>`;
                productName.textContent = item.name;
                productValue.textContent = item.shift;

                // Adicionar elementos ao contêiner
                container.appendChild(hashtagId);
                container.appendChild(productName);
                container.appendChild(productValue);

                // Adicionar o contêiner ao contêiner pai (workforceContainer)
                workforceContainer.appendChild(container);
            });

            // Atualizar a quantidade total de registros
            qtd_reg += response.data.workforce.length;
            document.getElementById('qtd_reg_workforce').innerHTML = '(' + response.data.workforce.length + ' items encontrados)';

            // Se não houver registros, no lugar do conteudo é escrito 'Nenhum item encontrado' 
        } else {
            const workforce = document.getElementById('workforce');
            const result = document.createElement('p');
            result.classList.add('text-center')
            result.innerHTML = 'Nenhum item encontrado';
            workforce.appendChild(result);
        }

        document.getElementById('searchResult').innerHTML = 'Foram encontrados ' + qtd_reg + ' resultados:';


    } catch (error) { // Tratamento para erro na requisisão ou campo vazio.
        console.error('Erro ao realizar a pesquisa:', error.message);
        const qtdReg = document.getElementsByClassName('reset-reg');
        // Formata a quantidade de registros de cada bloco para "nenhum" em caso de erro
        Array.from(qtdReg).forEach(element => {
            element.innerHTML = '(nunhum item encontrado)';
        });
    }
}

