/** @jsxImportSource react */

import useSWR, { Fetcher } from 'swr'
import { timeSince } from '../../utils/timeSince'

type Props = {
	path: string
}

type Commit = {
	commit: {
		author: {
			date: string
		}
	}
}

const URL = `https://api.github.com/repos/nowyouknowprogramming/webdev-learning-materials`

const fetcher: Fetcher<Commit[], string> = (...args) =>
	fetch(...args).then((res) => res.json())

const ArticleUpdateDate = ({ path }: Props) => {
	const { data, error, isLoading } = useSWR(
		`${URL}/commits?path=${path}&per_page=1`,
		fetcher,
		{
			revalidateOnFocus: false,
			refreshInterval: 3600 * 1000,
		}
	)

	const commitDate = data?.at(0)?.commit.author.date

	if (error || !commitDate || isLoading) return null

	return (
		<p>
			This article was last updated:{` `}
			{timeSince(new Date(commitDate)).replace(`,`, ' and')} ago
		</p>
	)
}

export default ArticleUpdateDate
