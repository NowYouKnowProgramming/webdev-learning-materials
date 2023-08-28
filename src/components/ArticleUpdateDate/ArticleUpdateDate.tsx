/** @jsxImportSource react */

import { timeSince } from '../../utils/timeSince'
import { useArticleDate } from './useArticleDate'

type Props = {
	path: string
}

const ArticleUpdateDate = ({ path }: Props) => {
	const { commitDate, error, isLoading } = useArticleDate(path)

	if (error || !commitDate || isLoading) return null

	return (
		<p>
			This article was last updated:{` `}
			{timeSince(new Date(commitDate)).replace(`,`, ' and')} ago
		</p>
	)
}

export default ArticleUpdateDate
