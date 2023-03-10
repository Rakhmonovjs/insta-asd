import { ReactComponent as Error } from '../assets/svgs/error503.svg'

function Error503() {
  return (
      <div className="h-[calc(100vh_-_49px)] flex justify-center items-center p-4">
          <div className="flex flex-col gap-20">
              <h2 className="text-center font-mono font-bold text-xl">Not yet launched :(</h2>
              <Error className="h-80 w-auto" />
          </div>
    </div>
  )
}

export default Error503