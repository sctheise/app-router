'use client'

const error = ({
    error,
    reset
}: {
    error: Error,
    reset: () => void
}) => {
    return <div>{error.message} <button onClick={reset}>Try Again</button></div>
}

export default error