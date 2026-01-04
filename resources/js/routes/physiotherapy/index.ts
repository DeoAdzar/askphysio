import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import condition from './condition'
/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/physiotherapy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::index
* @see app/Http/Controllers/PhysiotherapyController.php:15
* @route '/physiotherapy'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/physiotherapy/specialization/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::show
* @see app/Http/Controllers/PhysiotherapyController.php:26
* @route '/physiotherapy/specialization/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
export const conditions = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditions.url(options),
    method: 'get',
})

conditions.definition = {
    methods: ["get","head"],
    url: '/physiotherapy/conditions',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
conditions.url = (options?: RouteQueryOptions) => {
    return conditions.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
conditions.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: conditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
conditions.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: conditions.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
const conditionsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
conditionsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conditions.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhysiotherapyController::conditions
* @see app/Http/Controllers/PhysiotherapyController.php:37
* @route '/physiotherapy/conditions'
*/
conditionsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: conditions.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

conditions.form = conditionsForm

const physiotherapy = {
    index,
    show,
    conditions,
    condition,
}

export default physiotherapy