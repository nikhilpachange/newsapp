import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    
  
    articles = [
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Washington Post",
        "title": "Putin travels to Mongolia, defying international court arrest order - The Washington Post",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE9SeFRTV2VjTVB4Z0ZzQ0hhUGJqYTFJVTQ5bUJUU0NrY3l3NVRaWmhoTUVXVm15UFFFNDh5Wkt0eXdud0gzSkhZb0lOZ2tPZTRwTGVPY1hEaHktX09uVW05UEk5cFFNRlFoWFgzd0hsQW5HUlVUREhSOThGNVNTRXc?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:39:51Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Washington Post",
        "title": "A CPAP isn’t the only option for treating sleep apnea - The Washington Post",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQWEJJcXkyV21ibURHaUNyV2ZlZUwwMHNtUDdST3pKVnV2UEhVZkVMMUxLTXlBeGZlczJtdmNPWTBTdGxBUHNTUnBPanBmZEgyLWlDNXpzcUVUSW5LS2pyWFl6X090d2tteVM1cUo5OWVSZVQydTNUMHRKMWpGMGpGSjBqS2JPUGs2UlE?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:39:50Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CBS News",
        "title": "Harris to oppose sale of U.S. Steel to a Japanese firm during Pittsburgh event - CBS News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPN2VnUVRvU2VfV2JmRDE2MUNaZFdBSUFxYjJNUmd5TnVOUkRQbnQtNWwwY3pyazA4aXo4OTlHOVFQWVNWaGp3N2xDbjkwUGN0MFY4NzZlRDVfVV9xc1FpeURBSTMyVXl2ckJ6eVozMTAyNk50Mnp6NnZlMkdfbFFXWThhU1phd9IBiwFBVV95cUxOMjhRTFF6dTE4Y1JNcXlNenByVkp5LXlENjRTMVkxR3VuX1pfRTlXbWlvSW1mS2Zqb1NtVFRSUDh4dmstOE1WeHEtRHRNYXFEbUFkX3lUUFYxRy1RdlQ4WWE1SWV4YzZhbDZkV0NFTnBaeWlwQTYtZXpRbFBCZTR0ZzNqT0hnaW5EbFlV?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:15:39Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "‘A very serious situation’: Volkswagen could close plants in Germany for the first time in history - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPckRJaEhaT2NoME5IRk1DTzZFa1VKUV93MlFibFFIbnVZN3lvYjhIVnU1bDI3TmpYMmx1ZU1CSS1HeUNoQmlEazRraWg5MDNhSXlQRkVWdEJfcnlSVXY0UkpzMkt1bDZITk5fa3JBTDE4c2R1LTNPOFAtcjh0UGJ1aW9DV3MtTlQyaml4ZkpVa9IBhgFBVV95cUxOUDdBSC14by1WbTdfTl9XYnNBbVdrR0ZPbHZPLWh2anFZZGZ1U1pfdmhBTWcxSXJNMVhYWnlLdkk1VjJtMTlDTy0yVkhmQjVlOXN4Z3lzdDMzS04tWFFXZE9DTWlULXE3aUVPcGxnQ1A1ZlBuWWJKMUxKcy1kZ2dMaUVOTlFoQQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:11:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Ukraine carries out one of its biggest-ever drone attacks on Russia - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOX1VaSWloU2k5N2w2Ty1JbHcyS1k4Y2llVHAycjBFdWg4Y0NsbGNHR0dCN2pTUjQ4QmstMW44aWNoUURvaVhDdXNJS3cwQTZjUDFBbzd5LWY0dEhVb19jSm01eW5xX0t6d0JMcnZGaVB4OHpuTDROMXdTQWVtUUhrcmVBUlRpVHNGblJXT0h2ejVFejg?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:10:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Live updates: Israeli protests demand Gaza deal after 6 hostages killed - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNbUY3SXdKTmR3Mzh2cG1vMy02OENXUEgyOVRpTHBmeEtfYUVMek0wcm80dldCX0tPbVNfeG04dkd1TnVwZFAtT0FWTzhzQ3VSbzNjXzUtSzhSR2x3WVl4TTJBM3B3MzY0VjNSRXp2RnUxVzlWckxPc3JMUy1qSGFhdm1acm9RNmJpOWFtdVFRdWRTVXVpdVRjVkRpVQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T18:00:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Financial Times",
        "title": "The far-right’s disturbing success in eastern Germany - Financial Times",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE80STRSYTRNdDBXeHRlWkFoSFdJdk0xSXppdkdSV1hvWmlZOTFNVUtOcUtEeUM1UTZIRHFzQjVWSDB5aDJDLWJGS3ZpY3YzMUxYeDJ5dFBTM1dIa1VpWkZ5a0hTT1FjV3YxazBRY2huMGI?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T17:35:28Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "Exclusive: US seizes Venezuela President Nicolas Maduro’s airplane in the Dominican Republic - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOYm9jMDU4R0xlbC1Ea0tCUGJyMFJfaFlVUFd1Y1ZiWUd1RnFGb1c1SFhqTnNIUHhYZmtmek9vanVmM3QzOGt1cnQ5ZFBpOFo4TzVQdjY2SUZMTC16eEFpZ01Wazd1MWhyN01nMkNiREI1bjBEUzRMcFVwYWtMc2xOem1PU3V0SXktRm16dXpsLXlOMUJPbk0tTTBUMHV0Z9IBlAFBVV95cUxQUnRNWll1Slp1Q3pUV2ZlbkpwQkswQUZRcDdkaFhvcVhjYmpRR2d5Y2poMU5aMlpjUG5ua1VLUmlUYjk5LXk3UTRTTmZTeXplWkZxZmNGYThyUTAxQXd4N2lVX0xZNGF0QzFDSGJuVXFFRENtc3pPYldVd0YwMVloMXlkcG5Lc0JaZGVfQ3pDV244ZmJk?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T17:33:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Hollywood Reporter",
        "title": "'The Room Next Door' Review: Tilda Swinton in Pedro Almodóvar Drama - Hollywood Reporter",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOQVFRSlhQTkZ5NGNsUDdNMm5jOEh6b3BLOE1ZMGZCRHFTQTBzbXVhbXRrQ0JfakJ3a0lXSkhTcmlsX2hFRlk5cmQzaTl3UVpSUERaRkQwSXZyODBZbWg3WXNoMHdldWw2akI5M1AwV0VNdzdaWEZwNkJ6RXA3QkFweDhUOVllRV9IWERpcE5zOWhYc1BuT3BpWjlXbjQ2QlYwUy1mS21sZnJuTXRuczh3VWxXSUU4ZTE0SWU2VU1xUWx1UTdPM0I5ODJTX3RXUlloZEtz?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T17:20:45Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "New York Post ",
        "title": "How Scottie Scheffler’s Tiger Woods-esque year netted him over $62 million - New York Post ",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOMTR3RVZJUEpRTnB2OVRXSm1pYWJjZVhaaE5fY3N5T2JrR1RxUTVpbXdzSENvdEQzbGVHR2xJdkdEdkRRQWxvMDVNOWtWT1MzZzFEcGV0djBBSi1NY0lKZHpnQzJkamVBYVctZFlzMUVMRjhaUTZHMC1WOVJNNm9taWpFckVHN0NiMDRKRHRqbzhHMjkzY01fT2N6VExqNzJnSFgzMFpVTXFuemVvM1RB?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T17:02:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "BBC.com",
        "title": "Netanyahu not doing enough to secure Gaza hostage deal, says Biden - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE5oeWxmMktPRUhtZElHdFUzVjVvd1ROenJ3ZlVnTjdmQWp5TC1odzBONjl3dFR5Q3hyWDVYbWctNnQ3UEJIenBPaUFVc3lyZGFkNUZCcWE2MXR1Z9IBX0FVX3lxTE5vSDlocENUdXo5ZGcwc3VtUkIzd3pnRno1eUNLZUt5N3dCbHZ0cVNPd3Z3YVo5bHEyNlA0VWVOOWZtTWQzbDExV0RqcUNkcEJFWWY2RS1jY0w0UkZGVHNV?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:54:31Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Forbes",
        "title": "Apple Phone 16, iPhone 16 Pro Release Date Schedule: Your Complete Countdown - Forbes",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNdktNVjB5ZG9mVFpVLUt4QUpTeTdCaFl0dEJTcnkwOWY3SUM1WU9sb1RqbHk0NFc4dXBlSGRrbFIzaXAwQkItdE1kX0pieEliVUpsVWtPWFdzcmI5U09wTXV2UUlrdV84d2hqbjBEa210UUZaNDEyVFE4MGY1YlJrZmE4X0VpVFdCMG9CUWQtaEJBSmY4bW5EdmVUZm1NWEVGVWxLdDdVUzBEMWpaUHB1NUJxV2Nyalp1XzNwN3BfNWswSmh5eGc?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:52:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "CNN",
        "title": "New Titanic photos show major decay to legendary wreck - CNN",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPZUpYRnVfc2Y0WnlCZ1Y3cFVNZ0k2VDJqNXFUUkg1MGNuWUtFTG1HTFNsZ0RueEh1YUtGZnNnZVlwUC1DbEZTVFdlTVpzODhORTVPQVdoMHB0T2VjYkZBZnlmcHhwMnRoVENSLW1BeVJwcEJwNzdXYU0xOTB0aDRfRDdqODJmT1dnNGI3QmhYNVdDQkh2SGfSAYwBQVVfeXFMTmk2QU9IQVlxc1ZhVHZtOXdnSUhJVzNqellKNzhWT0NyOTJfc2tDZkVfbEVsQ2d2azdXZWN6WnloYy1LaW9NMEp5cElGbVJyTlpEMUk5Vkg3VkRZYl9tQkxiazFMTlpBbFI1SUJYWXVWaktsekNZS3dZc3FrOHRsQXpXQTVPRGZNcFVrYk4?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:20:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Reuters",
        "title": "U.S. soldiers assaulted in western Turkey, local governor's office and U.S. Embassy say - Reuters",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOby1SVFdwODZpMEs3UjBaaEZCTTZDM3RwcHcySnBiV3JXOGppek9Rb0FGRG1EOWNqT285TlBVYmNsQ0FQRC00Tm5YNzJKRVB3dS1QeUFNUk9qZElIWDNTQm93VXF6cU9nSElSWlBkeVFzZDctZjRIVzRNZHl2TlFHOU0yYm1zUHhxMUU1YWdmZVBmN0p0M3I2OVRDaWFidm1EcXRHQmpzTFlfNk1INVo4Sk5yTHlFRjRFVWtPdTE4dXJ2VlZTNF9V?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:17:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "WCVB Boston",
        "title": "Politicians attend Labor Day breakfast outside Boston hotel join striking workers - WCVB Boston",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQWTA3bVNYcWpqYmdFSUJWbFliTHd4RmF4TFZpVUQ4Q1dseV9UMHlveUdVQXNzTklWVmgwdUdTOWc2SWR0dnkyLUc3WHRXd2w4c05qRDhMTGlSTlBSWUxTU2I1ZVFlMkxkREVrQ2JnSVdQcF80dDFKQ3hhdFpKR3E3SUJKM29ncFJlaDUxN3Y4dTFHYWZ1cGwtam9yZw?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:17:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Reuters",
        "title": "UK housing portal Rightmove surges as Murdoch's REA considers bid - Reuters",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxPTFE3VnVTSXpnbVdxMG8tVHFmcU1QQTBVWGpzd0NXUVZKVUJacXkyMnJjYk93ZU5tZk1qUzNtTXpHTXVhR3BleVdTdGNmRE9PTkN3d0xWM2o4azVMRzlFenB1X1RGR3E2YlBqRXhiRW9hM1RCQ0ZaN3ZHU1lkME1iQlpZY0dVRnNmYzQzQjZZVUc4bDRoeGlnMnViX25HQ0ZCTno3WkZINjhRQQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T16:08:00Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Al Jazeera English",
        "title": "UK announces partial suspension of arms exports to Israel - Al Jazeera English",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPdGxES0x3dmVHbzFlY0RaVVNmVnV5cVBqR3dBZENDS0NhOTNwdUIzVDFpeTdiajRJQTJ0UG9TdEs2SGpnNkZTTlprVm9xNXBIQXlVM0FBSTF0MUh0WnJ1bnlwN1RJald0VlZqMmtDeVdlWjh5QWctVG40Wmk4azNiR3FnMHVMS3puREtVeFI1WHptWS1RVWxEWVpvZHVUd9IBowFBVV95cUxOYUtuX2I5ZWQzc2FJOUxMOTN2SzlLXzl6emM0XzZuT0JHbkVKYkVwTzJJd2RYQzhDQW15aVFWMVIzSUZTOUlNZjlQcnBraEtiTmtQaTRqWjlwZ2l3VlNzVlhKOHpmVEVXNE5SUldYdVJHQV9mT2lqSGxxSWI4LTVZWE9BSGNEY29BT2pRODMtNVdjRFhhc2NoNElpUmRQLUZBcFdZ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T15:56:15Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "Axios",
        "title": "Gender gap widens in support for Harris vs. Trump: poll - Axios",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxOQVFEM3ZFZF9MM1pUWG93a0tqbDJuVTlHa0lVTGU5RDhSZzhSNERGN0ZrX2Z1NVQ0V2xFdEpZN2RCUTFubjIwclBnVGZjVlR5clFYdnJVcGwteGpRQU1WWjZPYUhjQmFjTVI3azlwTGlCS2t5d011TmZGWWdMMy05TEtQRQ?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T15:40:30Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "BBC.com",
        "title": "Brazil X ban: Top court judges uphold block of Musk's platform - BBC.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE1iXzZnVjN2ZjRYWlhPVnBYVEVaTERwb1BZaE0zbTRuU1VvZ3VFb29oeDZLSkVwNExUb0htZEtTUkJJYW5vamplVHNZRkhhdDRkVWM4aVY0SWo5UdIBX0FVX3lxTFBpd0ZsN1NpcFZ3ekcwZ25ERnRRQ01vWEFQMl91aDB2Ymc2aXNlM1daaWVWMkFUaGE4QnEwRHpxQjdoMzZPTE45NkVnamVza3k5RFVwdGJvbUV1bXRNX0hz?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T15:39:52Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "TechCrunch",
        "title": "A16z’s Joshua Lu says AI is already radically changing video games and Discord is the future - TechCrunch",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNaDVhQkdPcnEzZUtZa2JldkRmOURJWlZheV8wWXVuZlZER2xucmdabFl1UXJ1RGlVNEd5WkhPb09PbU8xTElvMDFiS2U4OGtMTHdLcFhkcTRBZzN5SHNUVDNQYW1sU0wyOWtnTm1meUhXdHZWYTB4QV94aS1CUk5lVEY3cm1MMGFYYzY1bkZDVEQ3RUhIaWppSlZMZXc5WnRjNHBWdUFJbU5TejR1VWd4TlBqZ0M2VGMxd1ZVLUVpZ0lmUTRz?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-09-02T15:00:00Z",
        "content": null
      }
    ]
    constructor()
    {
        super();
        console.log(" hello ");
        this.state = {
            article: this.articles,
           loading: false,
        page:1
         }
    }

async componentDidMount(){
  console.log("cdm");
  let url = `https://newsapi.org/v2/top-headlines?country=$(this.props.country)&category=business&category=&(this.pros.category)&apikey=1f573a070ca04a8a93491529ea632792&pageSize-${this.props.pageSize}`
  let data = await fetch (url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults})

}

 handlePrevClick = async ()=> {
    console.log("Previous");
    let url = 'https://newsapi.org/v2/top-headlines?country=$(this.props.country)&category=business&category=&(this.pros.category)&apikey=1f573a070ca04a8a93491529ea632792';
    let data = await fetch (url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
     page: this.state.page-1,
     articles: parsedData.articles
    })

}

 handleNextClick = async ()=>{
  console.log("Next");
  if(this.state.page + 1 >Math.ceil(this.totalResults/this.props.pageSize)){

  }
  else{
  let url = 'https://newsapi.org/v2/top-headlines?country=$(this.props.country)&category=business&category=&(this.pros.category)&apikey=1f573a070ca04a8a93491529ea632792';
  let data = await fetch (url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({
   page: this.state.page+1,
   articles: parsedData.articles
  })
}
}


  render() {
console.log("render")

    return (
      <div className=" container my-3 ">
        <h1 className='text-center'> Newsmonkey - Top Headlines</h1>
        <div className="row" >
        {this.articles.map((element)=>{
        return <div className="col-md-4 " key={element.url}>
        <Newsitem  title={element.title} description={element.description} imageUrl={element.urToImage} newsId={element.Url}/>
        </div> 

        })}
       
        </div> 
        <div className="container d-flex justify-content-between">
        <button disabled ={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>previous</button>
        <button disabled={this.state.page + 1 >Math.ceil(this.totalResults/20)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next</button>
        </div>
        </div>
    )
  }
}

