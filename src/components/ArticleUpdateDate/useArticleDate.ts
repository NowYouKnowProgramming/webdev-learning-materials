import useSWR, { type Fetcher } from 'swr'

const URL = `https://api.github.com/repos/nowyouknowprogramming/webdev-learning-materials`

type Commit = {
	commit: {
		author: {
			date: string
		}
	}
}

const HOUR_IN_MILLISECONDS = 3600 * 1000

const fetcher: Fetcher<Commit[], string> = (...args) =>
	fetch(...args).then((res) => res.json())

export const useArticleDate = (path: string) => {
	const { data, error, isLoading } = useSWR(
		`${URL}/commits?path=${path}&per_page=1`,
		fetcher,
		{
			revalidateOnFocus: false,
			refreshInterval: HOUR_IN_MILLISECONDS,
		}
	)

	const commitDate = data?.at(0)?.commit.author.date

	return {
		commitDate,
		error,
		isLoading,
	}
}
