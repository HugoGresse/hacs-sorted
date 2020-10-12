
export type PackageName = string
export type CategoryKey = string
export type CategoryName = string
export type Category = {
    key: CategoryKey,
    name: CategoryName
}
export type Package = { name: PackageName, stats?: RepoStats }
export type PackagesByCategory = { category: Category, packages: Package[] }
export type RepoStats = {
    stars: number,
    forks: number,
    watchers: number,
    openIssues: number,
    updatedAt: string
}