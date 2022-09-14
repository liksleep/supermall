import { requst } from "./requst"


export function getCategory() {
  return requst({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return requst({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return requst({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
