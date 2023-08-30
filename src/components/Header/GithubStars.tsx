/** @jsxImportSource react */

import { StarIcon } from '@radix-ui/react-icons'
import useSWR, { Fetcher } from 'swr'

type Response = {
  stargazers_count: number
}

const fetcher: Fetcher<Response, string> = (...args) =>
	fetch(...args).then((res) => res.json())

export const GithubStars = () => {
  const {} = useSWR('')

  const { data, error, isLoading } = useSWR(
		`https://api.github.com/repos/nowyouknowprogramming/webdev-learning-materials`,
		fetcher,
		{
			revalidateOnFocus: true,
			refreshInterval: 60000,
		}
	)

  return <a className='min-w-[100px] bg-theme-base/30 text-theme-base flex gap-2 items-center rounded-md hover:shadow-md transition-shadow ease-out ring-1 ring-basetext/10 hover:ring-basetext/40 min-h-[40px] px-3 mr-3' target='_blank' rel='noopener noreferrer' href="https://github.com/NowYouKnowProgramming/webdev-learning-materials"><StarIcon/><span>Star</span><span className='border-l-2 pl-2 border-l-basetext/10'>{data?.stargazers_count}</span></a>
}

export default GithubStars