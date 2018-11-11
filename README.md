&lt;rms-webcomponent-template&gt;
====

Description
----
The `rms-webcomponent-template` web component is a template to add web components. I'm creating it to avoid backward compatibility issues with NUTMEG that keeps changing.

#### Properties
* `name: string`: a simple name.

#### Methods
Properties are the public API of a Web Component and external code can set/get them

#### Events Received
none

#### Events Emitted
none

### Development

### Usage
Below is example where the component is being declared as a child of an Angular component, with its attribute values being set at the Angular's component controller.

````html
     <rms-webcomponent-template
         [name] = 'name'
     >
     </rms-webcomponent-template>
````

In order to use it, simple copy this template. The node modules might have to be updated!

# Last but not least
````html
 _   _                   _____            
| | | | __ ___   _____  |  ___|   _ _ __  
| |_| |/ _` \ \ / / _ \ | |_ | | | | '_ \
|  _  | (_| |\ V /  __/ |  _|| |_| | | | |
|_| |_|\__,_| \_/ \___| |_|   \__,_|_| |_|                                      
````