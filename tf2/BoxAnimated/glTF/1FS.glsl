precision highp float;
uniform vec4 u_diffuse;
uniform vec4 u_specular;
uniform float u_shininess;
uniform float u_transparency;
uniform vec3 u_light0Color;
uniform vec3 u_light1Color;
varying vec3 v_position;
varying vec3 v_normal;
varying vec3 v_light0Direction;
void main(void) {
    vec3 normal = normalize(v_normal);
    vec4 diffuse = u_diffuse;
    vec3 diffuseLight = vec3(0.0, 0.0, 0.0);
    vec3 specular = u_specular.rgb;
    vec3 specularLight = vec3(0.0, 0.0, 0.0);
    vec3 ambient = diffuse.rgb;
    vec3 viewDir = -normalize(v_position);
    vec3 ambientLight = vec3(0.0, 0.0, 0.0);
    {
        ambientLight += u_light1Color;
    }
    {
    vec3 l = normalize(v_light0Direction);
    float attenuation = 1.0;
    diffuseLight += u_light0Color * max(dot(normal, l), 0.) * attenuation;
    vec3 reflectDir = reflect(-l, normal);
    float specularIntensity = max(0., pow(max(dot(reflectDir, viewDir), 0.), u_shininess)) * attenuation;
    specularLight += u_light0Color * specularIntensity;
    }
    vec3 color = vec3(0.0, 0.0, 0.0);
    color += diffuse.rgb * diffuseLight;
    color += specular * specularLight;
    color += ambient * ambientLight;
    gl_FragColor = vec4(color * diffuse.a * u_transparency, diffuse.a * u_transparency);
}
