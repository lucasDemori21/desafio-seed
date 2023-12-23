namespace desafio_seed.Models
{
   
        public class Sales
        {
        public int SalesOrderID { get; set; }
        public string? DeliveryDate { get; set; }
        public string? Customer { get; set; }
        public string? MaterialID { get; set; }
        public string? MaterialName { get; set; }
        public int Quantity { get; set; }
        public int TotalValue { get; set; }
       }
    

}