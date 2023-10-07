# if we cannot  use link component from react router dom outside browserRouter component 
example
 - <someHeader/>
 - <RouterProvider router={appRoute}/>
        here if we cannot  use link in header component 

# features in our youtube clone web app

# search bar 
 - api call for suggestions
 - Debouncing :- optimisize it by calling only if key press time is more tham 200ms 
 - Caching :- store the previous suggestions in redux slice (suggestion slice ) so that use it if same query ask 
 - we can also optimize it by set the size of slice so that it eliminate the old query suggestion 
# live chat using mockdata
 - By api polling
 - use rdeux slice (chatSlice) for optimize so that dom does not explod by increaseing the size
# nested comment reply (cuurently it is not their but i have done this )
  - i do it using some mock data to show nested comment reply
  - use recursion <VideoComments/> call itself if their are reply
# related video accroding to watching 
 - i do it using suggestion api 
 
 