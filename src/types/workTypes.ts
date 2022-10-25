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

export type WorkIntroduction = {
  text: string
  period: string
  technology: string
  role: string
  repository: string
  repository2?: string
}

export type WorkDetailContent = {
  theme: string
  text: string
}

export type WorkPageProps = {
  images: {
    path: string
    alt: string
  }[]
  workTitle: string
  introduction: WorkIntroduction
  detail: WorkDetailContent[]
}
