
export interface PageProps{
  children: React.ReactNode
  className?: string
}

export default function Page(props: PageProps){
  return (
    <div className="flex flex-col min-h-screen">
            <main
                className={`
                    flex-1 
                    ${props.className ?? ''} 
                `}
            >
                {props.children}
            </main>
        </div>
  )
}