using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using desafio_seed.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;

namespace desafio_seed.Controllers
{
    /// <summary>
    /// Controlador responsável por operações de pesquisa em dados.
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        /// <summary>
        /// Obtém resultados de pesquisa com base em um termo de pesquisa.
        /// </summary>
        /// <param name="searchTerm">O termo de pesquisa.</param>
        /// <returns>Resultados da pesquisa em um formato de dicionário.</returns>
        [HttpGet("search")]
        [ActionName("search")]
        [ProducesResponseType(typeof(Dictionary<string, List<object>>), 200)]
        [ProducesResponseType(typeof(string), 400)]
        [ProducesResponseType(typeof(string), 500)]
        [Produces("application/json")]
        public IActionResult Get([FromQuery] string searchTerm)
        {
            try
            {
                // Dicionário para armazenar resultados da pesquisa
                Dictionary<string, List<object>> resultDictionary = new Dictionary<string, List<object>>();

                // Leitura de dados JSON de arquivos
                string conteudoJsonExample = System.IO.File.ReadAllText("./data/example.json");
                string conteudoJsonEquipments = System.IO.File.ReadAllText("./data/equipments.json");
                string conteudoJsonMaterials = System.IO.File.ReadAllText("./data/materials.json");
                string conteudoJsonPurchase = System.IO.File.ReadAllText("./data/purchase_orders.json");
                string conteudoJsonSales = System.IO.File.ReadAllText("./data/sales_orders.json");
                string conteudoJsonWorkforce = System.IO.File.ReadAllText("./data/workforce.json");

                // Verifica se os dados JSON não estão vazios
                if (!string.IsNullOrEmpty(conteudoJsonExample) && !string.IsNullOrEmpty(conteudoJsonEquipments) && !string.IsNullOrEmpty(conteudoJsonMaterials) && !string.IsNullOrEmpty(conteudoJsonPurchase) && !string.IsNullOrEmpty(conteudoJsonSales) && !string.IsNullOrEmpty(conteudoJsonWorkforce))
                {
                    // Desserializa os dados JSON em listas de objetos
                    var listaDeDadosExample = JsonConvert.DeserializeObject<List<Example>>(conteudoJsonExample);
                    var listaDeDadosEquipments = JsonConvert.DeserializeObject<List<Equipments>>(conteudoJsonEquipments);
                    var listaDeDadosMaterials = JsonConvert.DeserializeObject<List<Materials>>(conteudoJsonMaterials);
                    var listaDeDadosPurchase = JsonConvert.DeserializeObject<List<Purchase>>(conteudoJsonPurchase);
                    var listaDeDadosSales = JsonConvert.DeserializeObject<List<Sales>>(conteudoJsonSales);
                    var listaDeDadosWorkforce = JsonConvert.DeserializeObject<List<Workforce>>(conteudoJsonWorkforce);

                    // Filtra os dados com base no termo de pesquisa
                    var filteredListExample = FilterBySearchTerm(listaDeDadosExample, searchTerm);
                    var filteredListEquipments = FilterBySearchTerm(listaDeDadosEquipments, searchTerm);
                    var filteredListMaterials = FilterBySearchTerm(listaDeDadosMaterials, searchTerm);
                    var filteredListPurchase = FilterBySearchTerm(listaDeDadosPurchase, searchTerm);
                    var filteredListSales = FilterBySearchTerm(listaDeDadosSales, searchTerm);
                    var filteredListWorkforce = FilterBySearchTerm(listaDeDadosWorkforce, searchTerm);

                    // Adiciona os resultados filtrados ao dicionário
                    resultDictionary["example"] = filteredListExample.Cast<object>().ToList();
                    resultDictionary["equipments"] = filteredListEquipments.Cast<object>().ToList();
                    resultDictionary["materials"] = filteredListMaterials.Cast<object>().ToList();
                    resultDictionary["purchase"] = filteredListPurchase.Cast<object>().ToList();
                    resultDictionary["sales"] = filteredListSales.Cast<object>().ToList();
                    resultDictionary["workforce"] = filteredListWorkforce.Cast<object>().ToList();

                    return Ok(resultDictionary);
                }
                else
                {
                    // Retorna um erro se um ou ambos os arquivos têm conteúdo nulo ou vazio
                    return BadRequest("Um ou ambos os arquivos têm conteúdo nulo ou vazio");
                }
            }
            catch (Exception ex)
            {
                // Retorna um erro interno do servidor em caso de exceção
                return StatusCode(500, $"Erro ao processar a requisição: {ex.Message}");
            }
        }

        /// <summary>
        /// Filtra uma lista de objetos com base em um termo de pesquisa.
        /// </summary>
        /// <typeparam name="T">O tipo de objeto na lista.</typeparam>
        /// <param name="dataList">A lista de objetos.</param>
        /// <param name="searchTerm">O termo de pesquisa.</param>
        /// <returns>Lista filtrada de objetos.</returns>
        private List<T> FilterBySearchTerm<T>(List<T> dataList, string searchTerm)
        {
            var listaFiltrada = new List<T>();

            foreach (var item in dataList)
            {
                // Obtém todas as propriedades públicas da classe
                var properties = item.GetType().GetProperties();

                // Verifica se alguma propriedade contém o termo de pesquisa
                if (properties.Any(prop => prop.GetValue(item)?.ToString()?.Contains(searchTerm, StringComparison.OrdinalIgnoreCase) == true))
                {
                    listaFiltrada.Add(item);
                }
            }

            return listaFiltrada;
        }
    }
}
