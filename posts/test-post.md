# this is a test post please ignore it

## test group

1. First item
2. Second item
3. Third item
   - Indented item
   - Indented item
4. Fourth item

## test group 2

1. First item
2. Second item
3. Third item
4. Fourth item

## test group 3

1. First item
1. Second item
1. Third item
1. Fourth item

- First item
- Second item
- Third item
- Fourth item

## Finding Assets to Use

The [unity asset store](https://assetstore.unity.com/) is a great place to publish your own content to have others use it and/or pay you for it, but it is also a great resource for inspiration or saving you from spending time making tons of assets.

I found [this one](https://assetstore.unity.com/packages/2d/gui/icons/105-colorful-2d-planet-icons-71084) for the hail ball.

```c#
using UnityEngine;
using System.Collections;

public class CloudPool : MonoBehaviour
{
    public GameObject cloudPrefab;                                  //The cloud game object.
    public int cloudPoolSize = 5;                                   //How many clouds to keep on standby.
    public float initialCloudSpawnRate = 3f;                               //How quickly clouds spawn.
    public float cloudSpawnRate;
    public float cloudMin = -1f;                                    //Minimum y value of the cloud position.
    public float cloudMax = 3.5f;                                   //Maximum y value of the cloud position.
    public float spawnXPosMax = 8f;
    public float spawnXPosMin = -4f;
    private GameObject[] clouds;                                    //Collection of pooled clouds.
    private int currentCloud = 0;                                   //Index of the current cloud in the collection.
    private Vector2 objectPoolPosition = new Vector2(-15, -25);     //A holding position for our unused clouds offscreen.
    private float spawnXPosition = 10f;
    private float timeSinceLastSpawned;

    void Start()
    {
        cloudSpawnRate = initialCloudSpawnRate;
        timeSinceLastSpawned = cloudSpawnRate;

        //Initialize the clouds collection.
        clouds = new GameObject[cloudPoolSize];

        //Loop through the collection
        for (int i = 0; i < cloudPoolSize; i++)
        {
            //and create the individual clouds.
            clouds[i] = (GameObject)Instantiate(cloudPrefab, objectPoolPosition, Quaternion.identity);
        }

        Update();
    }

    //This spawns clouds as long as the game is not over.
    void Update()
    {
        timeSinceLastSpawned += Time.deltaTime;

        if (GameControl.instance.gameOver == false && timeSinceLastSpawned >= cloudSpawnRate)
        {
            cloudSpawnRate = initialCloudSpawnRate / System.Math.Abs(GameControl.instance.scrollSpeed);
            timeSinceLastSpawned = 0f;

            //Set a random y position for the cloud
            float spawnYPosition = Random.Range(cloudMin, cloudMax);
            spawnXPosition = Random.Range(spawnXPosMin, spawnXPosMax);

            //then set the current cloud to that position.
            clouds[currentCloud].gameObject.SetActive(true);
            clouds[currentCloud].transform.position = new Vector2(spawnXPosition, spawnYPosition);

            //Increase the value of currentCloud. If the new size is too big, set it back to zero
            currentCloud++;
            if (currentCloud >= cloudPoolSize)
            {
                currentCloud = 0;
            }
        }
    }
}
```
