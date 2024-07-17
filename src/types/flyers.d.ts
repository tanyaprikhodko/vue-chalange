export interface Flyers {
  sku: string
  title: string
  properties: Property[]
  excludes: Exclude[][]
}

export interface Property {
  slug: string
  title: string
  locked: boolean
  options: Option[]
}

export interface Option {
  slug: any
  name?: string
  nullable: boolean
  customSizes?: CustomSizes
  eco?: boolean
  type?: string
  description?: string
}

export interface CustomSizes {
  minHeight: number
  minWidth: number
  maxHeight: number
  maxWidth: number
}

export interface Exclude {
  options: string[]
  property: string
}

export interface StoreState {
  flyersProperties: Property[]
  flyersExcludes: Exclude[][]
  addedFlyers: SelectedOptions[]
}

export interface SelectedOptions {
  [key: string]: Option
}
