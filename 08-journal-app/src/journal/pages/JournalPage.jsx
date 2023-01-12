import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import {  AddOutlined } from "@mui/icons-material"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant='p' component='p' >
        Ex esse deserunt ipsum exercitation ea veniam proident ea. Qui eu Lorem sint id officia exercitation officia enim. Lorem irure do do qui do commodo sint incididunt elit aute ea fugiat minim. Pariatur ut deserunt qui culpa sunt amet occaecat nostrud eu qui amet voluptate. Minim consequat tempor sunt id irure duis ad eiusmod sunt incididunt ad mollit. Cillum laborum irure deserunt duis officia aute pariatur eiusmod anim eiusmod pariatur pariatur ad. Ipsum quis Lorem consectetur minim laborum ex.
      </Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton 
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover' : { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined 
          sx={{ fontSize: 30 }}
        />
      </IconButton>

    </JournalLayout>

  )
}
