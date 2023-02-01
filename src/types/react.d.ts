import { FunctionComponent, PropsWithChildren } from 'react'

export type FC<T = {}> = FunctionComponent<PropsWithChildren & T>
