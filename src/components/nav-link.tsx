import { ComponentProps } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      {...props}
      data-current={pathname === props.to}
      className={cn(
        'flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[current=true]:text-foreground',
        props.className,
      )}
    />
  )
}
