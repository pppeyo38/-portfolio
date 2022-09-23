export type worksListProps = {
  worksList: {
    img: string
    title: string
    route: string
    product: string
    role: string
  }[]
}

export type workPageProps = {
  images: {
    path: string
    alt: string
  }[]
  workTitle: string
}
