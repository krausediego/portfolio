import { TriangleAlert } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export function ProjectsPage() {
  return (
    <>
      <Helmet title="Projects" />
      <div className="m-auto flex items-center justify-center gap-4">
        <TriangleAlert className="size-8 text-muted-foreground" />
        <span className="text-2xl text-muted-foreground">Work in progress</span>
      </div>
    </>
  )
}
