import React from "react";


const BarClose = () => {
  return (
    <div className=" p-4 w-24 sticky top-2 text-sm">
      <div className="">
        <div className="p-2 ">
          <img
            className=" w-14"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuYyQVZ2NarcH7JSWx8pgzZQMGv6AHxOYag&usqp=CAU"
            alt=""
          />
          <button className="p-2  text-sm">Home</button>
        </div>
        <div className="py-2 ml-4 ">
          <img
            className="w-5 ml-2 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC56YvgN8x2hv6lVkMtTasrIFXE2zB4gWYzQ&usqp=CAU"
            alt=""
          />
          <button className="mt-4 pl-1  text-sm">Shorts</button>
        </div>
        <div className="py-2 ml-3 ">
          <img
            className="w-8 ml-2   "
            src="https://static.thenounproject.com/png/4530414-200.png"
            alt="subs"
          />
          <button className=" mt-4  text-sm">Subscription</button>
        </div>
        <div className="py-2 ml-3 ">
          <img
            className="w-8 ml-2   "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAD8/PwJCQnj4+Py8vIpKSlCQkIEBATOzs4WFhb6+voODg5dXV0iIiJ5eXm0tLSWlpbX19fq6uozMzMdHR2Hh4dZWVmnp6ff399HR0dUVFTExMQ6OjrS0tIuLi5nZ2dxcXF/f39jY2OLi4ufn5+5ublMTEw5BBLOAAAEw0lEQVR4nO2da3eiMBBAeRYQUHlZVNZW2ur//4e73SU8PeuQhEzKmftNVuLcwoRJgKxhEARBEARBEARBEARBEARBEMTasBZmscCz/ef7Pd9ubN9Uhx8VL97r7isIJVlcdi8Kw3+A7X0exTUCD9eiwbsJetxUnkz/xRM7KshnVR+7FPBwsKMfkKxFxBQ4Jlvs2AfY/Hmy/5fs0WmX3IJjFi53rRpjhe4x+HP9yvvdzYm/vVtu2udKXfxT3PLUmVQCDWFKNFTtGf6KHYogGbsM2LLqFSwqdkhEr/Do5I3IATsQUWqJSTJv/CB5BLJvRH7NC/lS1rH3VkTAAYh/CrqdA8+ecY3rNWJHxZsX1+Xlkdal+dYWbpEl92h2FHZrEvBp9InuSTaOihVLEVQjjfkKd4818EvY4xs/Todxuc0/2DCN8Mo7/vCbDj6U4vHd4HVwybDYdpCH88b/u5ZkEdPMnX5sbCvIQ6DWlXxq/WXbN2EbAR4h//EwowtrRUKyt7z1zi62DSBy5f5B+37pmrmc5KlceUTSfp6/xIeyOmauwtLXcrO0Kg9xf5rA70ZScJH3ziJxnn99OZykc+kOCVgkZFdBP0EfgVif7OyI2ljAIm2hLDBXIY+ERdMOCcEih+aLW/Tj8Y1VNOG0ZTtY5HXaUWBybcKJ2QawCBu5iMznSaRswmnLdrAIO5bB028qIWBnOtsAFmGdFmrP2zEp28EirMNzF40PzKRsB4uwL2rRaXVVtM82zBZZNLwZjOMhEWxIhEQWgkRIZCFIhFtkoYd5VItcTrZ/X6L0Vyxy+Vf9x/KLf8Ui7M6xvZNd/isW6SYVN5JnkRSLmD1e9rOjnRGPQhHT9CRmPaqIzKxHFpGX9dgi0rIeX0RS1iOJjO7tSMh6JJHjqzlEOOuRRKYPCItmPZqIYexHz9aKZT2iiGElm6GKSNZjihiGu5OW9bgihuHEQxPurMcWkZb1+CKSsl4HESlZr4XIo6xPH+0+o2UkkWnWRzNNtBGZZP1drGVEkVHWg59GfNwyifD9XJ/RqXUWaxlNxBkV9j802VfS/a7lgriSEmUlRaO0wTuuyEoGVmsZ6q5k8mEl00GrmaBbzZTpgJ88id1jJbcV1nKjZyW33lZyM3TR29OTx2ehOwJR9sBA1nx8PvLnE7k3ey3+CEfafCzm7ggkVfVQza35mM/dEUp6jqKzgsec2Hs6z+diOEUWYxQPK0nruTuiM4yHvQUOWCpBbxF2QOznfYrWIqzzhUxXai3COl/IAi9ai7C3PSFL7mgt0vS+NmTeVW8Ro/5TDG1BKwdpLmK41cPVOZ7viA13PKsT0fX1PTC6v1AJRvdXXMHo/tIxGN1fAwej+4v5YNgQrNCi2wonSyWAaRev0GJxNPZn5VjPsF1OxKzRV94L2UJt5obj/HhnO5vFYe7dfamkddGGwpOxx/6SO8W5Lqs0c9Wt+WmFrpNWX/W56IXhcy1eejW1Y8f1NxFZlmoZcs5sFVkobAm23OWSkz9vXR25QNkX7rRZzNvfiV0F0g+JS6/xY3+ILxXvfnEsOCmV6Pwla1SUlvXHSfH/QeDbm21++jiUqFdjgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiC04jcUoTzDWhQsVgAAAABJRU5ErkJggg=="
            alt="subs"
          />
          <button className=" mt-4  text-sm">Library</button>
          </div>
      </div>
    </div>
  );
};

export default BarClose;
