export type WorksListContent = {
  img: string
  title: string
  route: string
  product: string
  role: string
}

export type WorksListProps = {
  worksList: WorksListContent[]
}

export type WorkContent = {
  period: string
  concept: string
  technology: string
  repository: string[]
}

export type WorkPageProps = {
  image: {
    path: string
    alt: string
  }
  color: string
  title: string
  abstract: string
  content: WorkContent
}
