'use client';

import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

type Post = { id: number; title: string; body: string };

// TODO:
//   1. Cargar los primeros 10 posts desde API_URL.
//   2. Mostrar un skeleton/spinner mientras carga.
//   3. Mostrar estado de error con botón "Reintentar".
//   4. Renderizar cada post como <ArticleCard />.
//   5. Input de búsqueda que filtre titulares en cliente (sin re-llamar al API).

export function NewsFeed() {
  // Tu código aquí
  return null;
}
