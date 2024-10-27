import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'

interface ListingItem {
  icon?: React.ReactNode
  title: string
  description: string
}

type Props = {
  items: ListingItem[]
}

export const BrandListing = ({ items }: Props) => {
  return (
    <List
      classes={{
        root: 'bg-gray-400 !p-2 rounded-lg !mt-8',
      }}
    >
      {items.map((item, index) => (
        <ListItem
          key={index}
          alignItems='flex-start'
          classes={{ root: 'gap-2 !p-2' }}
        >
          <ListItemAvatar classes={{ root: '!min-w-min !mt-0' }}>
            {item.icon}
          </ListItemAvatar>
          <ListItemText
            classes={{
              primary:
                'text-blue-900 !text-sm/[21px] !-tracking-xs !font-medium !mb-1',
              secondary: '!text-xs/[18px] !text-blue-800 !-tracking-xs',
            }}
            primary={item.title}
            secondary={item.description}
          />
        </ListItem>
      ))}
    </List>
  )
}
