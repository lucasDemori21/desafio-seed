namespace desafio_seed.Models
{
   
        public class Purchase
        {
            public int PurchaseOrderID { get; set; }
            public string? DeliveryDate { get; set; }
            public string? Supplier { get; set; }
            public string? MaterialID { get; set; }
            public string? MaterialName { get; set; }
            public int Quantity { get; set; }
            public int TotalCost { get; set; }
        }
    

}