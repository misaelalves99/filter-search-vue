// app/lib/api/productsService.ts

import type { Product } from '../types/product';

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: 1,
      name: 'Smartphone XYZ',
      price: 1499.90,
      description: 'Smartphone com tela OLED, 6GB de RAM e 128GB de armazenamento.',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg',
      images: [
        'https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/10/10/13/59/huawei-3737335_1280.jpg',
      ],
      category: 'electronics',
      oldPrice: 1699.90,
    },
    {
      id: 2,
      name: 'Camiseta Estilosa',
      price: 59.90,
      description: 'Camiseta 100% algodão, disponível em várias cores.',
      imageUrl: 'https://cdn.pixabay.com/photo/2020/03/21/09/36/fashion-4953133_1280.jpg',
      images: [
        'https://cdn.pixabay.com/photo/2020/03/21/09/36/fashion-4953133_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/03/21/09/36/fashion-4953133_1280.jpg',
        'https://cdn.pixabay.com/photo/2020/03/21/09/36/fashion-4953133_1280.jpg',
      ],
      category: 'clothing',
      oldPrice: 69.90,
    },
    {
      id: 3,
      name: 'Fone de Ouvido Bluetooth',
      price: 299.90,
      description: 'Fone de ouvido sem fio com excelente qualidade de som.',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/10/25/06/15/headphone-4576092_1280.jpg',
      images: [
        'https://cdn.pixabay.com/photo/2019/10/25/06/15/headphone-4576092_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/10/25/06/15/headphone-4576092_1280.jpg',
        'https://cdn.pixabay.com/photo/2019/10/25/06/15/headphone-4576092_1280.jpg',
      ],
      category: 'electronics',
      oldPrice: 399.90,
    },
    {
      id: 4,
      name: 'Relógio de Pulso',
      price: 249.90,
      description: 'Relógio masculino com design moderno e resistente à água.',
      imageUrl: 'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg',
      images: [
        'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg',
        'https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_1280.jpg',
      ],
      category: 'accessories',
      oldPrice: 269.90,
    },
    {
      id: 5,
      name: 'Jaqueta Casual',
      price: 399.90,
      description: 'Jaqueta estilosa para dias frios.',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/13/26/casual-1869832_1280.jpg',
      images: [
        'https://cdn.pixabay.com/photo/2016/11/29/13/26/casual-1869832_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/29/13/26/casual-1869832_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/29/13/26/casual-1869832_1280.jpg',
      ],
      category: 'clothing',
      oldPrice: 499.90,
    },
  ];
}
