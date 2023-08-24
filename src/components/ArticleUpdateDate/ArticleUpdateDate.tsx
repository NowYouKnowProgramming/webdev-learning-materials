/** @jsxImportSource react */

import { useEffect, useState } from 'react'
import { timeSince } from '../../utils/timeSince'

type Props = {
	path: string
}

const URL = `https://api.github.com/repos/nowyouknowprogramming/webdev-learning-materials`

const getLastUpdateDate = async (path: string) => {
	const response = await fetch(`${URL}/commits?path=${path}&per_page=1`)
	return await response.json()
}

const ArticleUpdateDate = ({ path }: Props) => {
	const [updatedAt, setUpdatedAt] = useState<null | string>(null)

	useEffect(() => {
		getLastUpdateDate(path)
			.then((data) => {
				setUpdatedAt(data[0].commit.committer.date)
			})
			.catch(() => setUpdatedAt(null))
	}, [])

	if (!updatedAt) return null

	return (
		<p>
			This article was last updated:{` `}
			{timeSince(new Date(updatedAt)).replace(`,`, ' and')} ago
		</p>
	)
}

export default ArticleUpdateDate
