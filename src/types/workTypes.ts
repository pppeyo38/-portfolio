export type worksListContent = {
  img: string
  title: string
  route: string
  product: string
  role: string
}

export type worksListProps = {
  worksList: worksListContent[]
}

export type workPageProps = {
  images: {
    path: string
    alt: string
  }[]
  workTitle: string
}
